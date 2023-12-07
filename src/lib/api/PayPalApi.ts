import { OnApproveActions } from "@paypal/paypal-js";
import { API } from "./API";

class PayPalApi extends API {
  createOrder({
    esim_id,
    quantity,
    email,
    user_code,
  }: {
    esim_id: number;
    quantity: number;
    email: string;
    user_code?: string | null;
  }): Promise<string> {
    console.log({ esim_id, quantity, email, user_code });

    try {
      const result = this.publicRoute<any>({
        url: "orders/",
        method: "POST",
        data: {
          esim_id,
          quantity,
          email,
          user_code,
        },
      });

      return Promise.resolve(result.then((response) => response.data.order_id));
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async onApprove({
    orderId,
    actions,
  }: {
    orderId: string;
    actions: OnApproveActions;
  }): Promise<void> {
    try {
      await this.publicRoute({
        url: `orders/${orderId}`,
        method: "POST",
      });

      window.location.replace("/status/success");
    } catch (error: any) {
      if (error.response.status === 500) {
        window.location.replace("/status/fail");
      }

      if (error.response.status === 422) {
        switch (error.response.data.message) {
          case "instrument declined":
            actions.restart();
            break;
          case "transaction refused":
          case "paypal internal error":
            window.location.replace("/status/fail");
            break;
        }
      }

      throw new Error(error);
    }
  }
}

export const payPalApi = new PayPalApi();

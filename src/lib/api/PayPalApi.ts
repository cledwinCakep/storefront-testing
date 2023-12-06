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
    try {
      const result = this.publicRoute<any>({
        url: "orders",
        method: "POST",
        data: {
          esim_id,
          quantity,
          email,
          user_code,
        },
      });

      console.log({ result });

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 300);
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  onApprove(orderId: string) {
    return this.publicRoute<any>({
      url: `orders/${orderId}`,
      method: "POST",
    });
  }
}

export const payPalApi = new PayPalApi();

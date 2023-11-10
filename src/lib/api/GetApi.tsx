import { AxiosResponse } from "axios";
import { API } from "./API";

class UtilityAPI extends API {
  getCountryList = (): Promise<AxiosResponse<any>> => {
    return this.publicRoute<any>({
      url: "countries/",
      method: "GET",
    });
  };
  getProductListByCountry(countryCode: string): Promise<AxiosResponse<any>> {
    return this.publicRoute<any>({
      url: "esims/",
      method: "GET",
      params: {
        country_code: countryCode,
      },
    });
  }
  postBuyesim(body: {
    esim_id: string;
    quantity: number;
    email: string;
  }): Promise<AxiosResponse<any>> {
    return this.publicRoute<any>({
      url: "orders/",
      method: "post",
      data: body,
    });
  }
}

export const utilityApi = new UtilityAPI();

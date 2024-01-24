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
    esim_id: number;
    quantity: number;
    email: string;
    user_code: string | null;
  }): Promise<AxiosResponse<any>> {
    return this.publicRoute<any>({
      url: "orders/",
      method: "post",
      data: body,
    });
  }
  searchCountry(body: { name: string }): Promise<AxiosResponse<any>> {
    return this.publicRoute<any>({
      url: "countries/search",
      method: "POST",
      data: body,
    });
  }
}

export const utilityApi = new UtilityAPI();

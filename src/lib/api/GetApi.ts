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
  };
  
  getProductListById(id: string): Promise<AxiosResponse<any>> {
    return this.publicRoute<any>({
      url: `esims/${id}`,
      method: "GET",
    });
  }

  getBlog(): Promise<AxiosResponse<any>> {
    return this.publicRoute<any>({
      url: "http://usimsa-dev.koreacentral.cloudapp.azure.com:1337/blogs?page=1&limit=8&sort=id-asc",
      method: "GET",     
    });
  };
  
  getBlogById(id: number): Promise<AxiosResponse<any>> {
    return this.publicRoute<any>({
      url: `http://usimsa-dev.koreacentral.cloudapp.azure.com:1337/blogs/${id}`,
      method: "GET",
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

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class API {
  private instance: AxiosInstance;

  constructor() {

    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_HOST_API,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  protected publicRoute<T>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.request(config);
  }
}

//API
import { utilityApi } from "@/lib/api/GetApi"; //API

export default async function sitemap() {
  try {
    const countryList = await utilityApi.getCountryList();

    const countryPlan = countryList.data.map((countryList) => ({
      url: `http://superalink.com/plans/${countryList.country_code}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    }));

    return [
      {
        url: "http://superalink.com/",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      },
      ...countryPlan,
      {
        url: "http://superalink.com/privacy-policy",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "http://superalink.com/terms-and-conditions",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ];
  } catch (error) {
    console.error("Error", error);
  }
}

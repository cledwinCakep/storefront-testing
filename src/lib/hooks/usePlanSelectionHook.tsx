import { useEffect, useState } from "react";

const usePlanSelectionHook = () => {
  const [plan, setPlan] = useState("unlimited");
  const [type, setType] = useState("roaming");
  const [planData, setPlanData] = useState("unlimited");
  const [quota, setQuota] = useState("1GB");

  useEffect(() => {}, [plan, type, planData, quota]);

  return {
    plan,
    setPlan,
    type,
    setType,
    planData,
    setPlanData,
    quota,
    setQuota,
  };
};

export default usePlanSelectionHook;

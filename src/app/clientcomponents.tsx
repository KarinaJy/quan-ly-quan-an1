"use client";

import React, { useEffect } from "react";
import envConfig from "../config";

export default function ClientComponents() {
  useEffect(() => {
    console.log(envConfig);
  }, []);
  return <div>clientcomponents</div>;
}

"use client";

import React from "react";

// atoms
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import Anchor from "@/components/atoms/Anchor/Anchor";
import Radio from "@/components/atoms/Radio/Radio";
import Layout from "@/components/atoms/Layout/Layout";
import Tabs from "@/components/atoms/Tabs/Tabs";
import Breadcrumb from "@/components/atoms/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "@/components/atoms/Breadcrumb/BreadcrumbItem";

// molecules
import PriceInfo from "@/components/molecules/PriceInfo/PriceInfo";

import { MessageCircle } from "react-feather";

const Components = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Layout className="p-14">
      <Text as="h1">Hello, world</Text>
      <Button color="orange" size="sm" iconLeft={<MessageCircle size={18} />}>
        Button
      </Button>
      <Anchor href="#">Link menu</Anchor>
      <Radio value="1" label="Value 1" onChange={handleChange} /> <br />
      <Radio value="2" label="Value 2" onChange={handleChange} /> <br />
      <Radio value="3" label="Value 3" onChange={handleChange} /> <br />
      <Radio
        value="4"
        label="Value 4"
        onChange={handleChange}
        isDisabled={true}
      />{" "}
      <br />
      <Radio
        value="1"
        label="Value 5"
        name="radio2"
        onChange={handleChange}
      />{" "}
      <br />
      <Radio
        value="2"
        label="Value 6"
        name="radio2"
        onChange={handleChange}
      />{" "}
      <br />
      <Radio
        value="3"
        label="Value 7"
        name="radio2"
        onChange={handleChange}
      />{" "}
      <br />
      <Radio
        value="4"
        label="Value 8"
        name="radio2"
        onChange={handleChange}
        isDisabled={true}
      />{" "}
      <br />
      {/* <PriceInfo image="" title="China" price="Rp7.175,49" /> */}
      <Tabs
        data={[
          {
            label: "one",
            content: `boo`,
          },
          {
            label: "two",
            content: `far`,
          },
        ]}
      />
      <br />
      <Breadcrumb>
        <BreadcrumbItem isHome />

        <BreadcrumbItem>Destination</BreadcrumbItem>

        <BreadcrumbItem isCurrentlyActive>Japan</BreadcrumbItem>
      </Breadcrumb>
      <br />
      <br />
      <br />
      {/* <PriceInfo title="Title" price="Rp100.000,00" /> */}
    </Layout>
  );
};

export default Components;

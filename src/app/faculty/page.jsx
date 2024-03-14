import Card from "@/components/Card";
import { connectMongo } from "@/util/connectMongo";
import React from "react";
import "./page.scss"

const getData = async () => {
  try {
    const client = await connectMongo();
    const db = client.db("don_bosco");
    const faculty = await db.collection("faculty").find({}).toArray();

    console.log(faculty);
    return faculty;
  } catch (error) {
    console.log(error);
  }
};

const page = async () => {
  const data = await getData();

  return (
    <div className="container">
      {data.map((items) => (
        <Card
          name={items.name}
          subject={items.subject}
          designation={items.designation}
        />
      ))}
    </div>
  );
};

export default page;

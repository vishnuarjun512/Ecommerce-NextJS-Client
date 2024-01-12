import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id: string): Promise<Billboard> => {
  const url = `${URL}/${id}`;

  const res = await fetch(url, { method: "GET" });

  const data = await res.json();

  return data;
};

export default getBillboards;

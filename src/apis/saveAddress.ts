import api from "./network";

export default function saveAddress(address: string) {
  // return api.post("/", { address });
  return api.patch("/0xd5F0f8BDAe817C40fdb5209566efDc27BB6b4174", {
    deposit: 1,
  });
}

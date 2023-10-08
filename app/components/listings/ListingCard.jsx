'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const ListingCard = ({ item }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/productDetails");
  }

  return (
    <div className="col-span-1 cursor-pointer group border" onClick={handleClick}>
      <div className="flex flex-col w-full">
        <Image className="image-fluid col-xl-8 col-lg-6 col-md-8 col-sm-4 col-6 mx-auto p-0"
          src="/images/product.png"
          alt="Listing" width={200} height={260}
          style={{ width: "100%" }}
        />
        <div className="p-3">
          <h6 style={{ color: "#000", fontSize: "16px", fontWeight: "700" }} className="mb-2">
            {/* {"Apple Airpods Pro MWP22A M/A Bluetooth 7.1"} */}
            {item?.name}
          </h6>
          <h6 style={{ color: "#8B8B8B", fontSize: "12px", fontWeight: "500", marginTop: "-4px" }}>
            {"Min Quantity : " + item?.price}
          </h6>
          <div className="d-flex">
            <div style={{ color: "#000", fontSize: "20px", fontWeight: "700" }}>
              {/* {"$120.23"} */}
              ${item?.price}
            </div>
            <div style={{ marginLeft: "8px", marginTop: "8px" }}>
              <h6 style={{ color: "#9CA3AF", fontSize: "12px", fontWeight: "700", textDecoration: "line-through" }}>
                {"$11.23"}
              </h6>
            </div>
          </div>
          <div style={{ color: "#8B8B8B", fontSize: "12px", fontWeight: "600" }} className="mt-1">
            {"Seller Name"}
          </div>

          <button className="btn btn-dark mt-2" style={{ fontSize: "10px" }}>
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
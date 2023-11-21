import React, { useState } from "react";
import { extractCodeFromDriveLink } from "../../../handleImageCode";

const Hervest = (props: any) => {
  const [data, setData] = useState(props.crop.newHarvest);
  console.log(data);

  if (!data) {
    return <p>Data not available</p>;
  }

  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[95%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">{/* Your table headers */}</tr>
        </thead>
        <tbody>
          <tr className="h-10 border-b border-black">
            <td className="border-r border-black font-thin">
              {data.index || "N/A"}
            </td>
            <td className="border-r border-black font-thin">
              {data.Conditions_during || "N/A"}
            </td>
            <td className="border-r border-black font-thin">
              {data.prevent || "N/A"}
            </td>
            <td className="border-r border-black font-thin">
              {data.images && data.images.length > 0 ? (
                data.images.map((image: any, index: any) => {
                  return (
                    <img
                      src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(
                        image
                      )}`}
                      style={{
                        marginTop: "20px",
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      key={index}
                    />
                  );
                })
              ) : (
                <p>No Image</p>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginBottom: "20px",
          marginRight: "20px",
        }}
      >
        {data.Post_Harvest && data.Post_Harvest._id ? (
          data.Post_Harvest._id.map((stage: any, index: any) => {
            return (
              <figure key={index}>
                {data.Post_Harvest.images &&
                data.Post_Harvest.images.length > 0 ? (
                  data.Post_Harvest.images.map((image: any, index: any) => {
                    return (
                      <img
                        style={{ width: 250, height: 250 }}
                        src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(
                          image
                        )}`}
                        key={index}
                      />
                    );
                  })
                ) : (
                  <p>No Images for this stage</p>
                )}
                <figcaption style={{ fontSize: 25 }}>
                  {stage.name || "N/A"}
                </figcaption>
              </figure>
            );
          })
        ) : (
          <p>No Post-Harvest Data Available</p>
        )}
      </div>
    </>
  );
};

export default Hervest;

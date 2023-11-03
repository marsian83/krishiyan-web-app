import React, { useState } from "react";
import { extractCodeFromDriveLink } from "../../../handleImageCode";

const Hervest = (props: any) => {
  const [data, setData] = useState(props.crop.newHarvest);
  console.log(data);
  return (
    <>
      <table className="table-auto border-collapse border border-black font-bold text-base w-[95%] mx-auto mt-10">
        <thead className="border-b border-black">
          <tr className="text-center">
            {/* <th className="border-r border-black py-[1.2%] pl-1 pr-1">S.No</th> */}
            {/* <th className="border-r border-black py-[1.2%]">
              Physiological Maturity Key symptoms
            </th> */}
            <th className="border-r border-black py-[1.2%]">
              Harvest Index (kg/kg)
            </th>
            {/* <th className="border-r border-black py-[1.2%]">Average yield</th> */}
            <th className="border-r border-black py-[1.2%]">
              Conditions during harvest
            </th>
            {/* <th className="border-r border-black py-[1.2%]">
              Post Harvest Losses Csuses by
            </th> */}
            <th className="border-r border-black py-[1.2%]">How to prevent?</th>
            <th className="border-r border-black py-[1.2%] pl-2 pr-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {/* Stage1 */}
          <tr className="h-10 border-b border-black">
            {/* <td className="border-r border-black font-thin">1</td> */}
            {/* <td className="border-r border-black font-thin">
              {data.Physiological}
            </td> */}
            <td className="border-r border-black font-thin">{data.index}</td>
            {/* <td className="border-r border-black font-thin">{data.Average}</td> */}
            <td className="border-r border-black font-thin">
              {data.Conditions_during}
            </td>
            {/* <td className="border-r border-black font-thin">
              {
              data.Post_Harvest.map((d:any, i:any)=>{

              })
              }
            </td> */}
            <td className="border-r border-black font-thin">{data.prevent}</td>
            <td className="border-r border-black font-thin">
              {/* <img src={data.images.image1} />
              <img src={data.images.image2} style={{ marginTop: "20px" }} />
              <img src={data.images.image3} style={{ marginTop: "20px" }} />
              <img src={data.images.image4} style={{ marginTop: "20px" }} /> */}
              {data.images.length == 0 ? (
                <p>No Image</p>
              ) : (
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
                    />
                  );
                })
              )}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
      {/* <table className="m-10">
        <tr className="text-center">
          <th className="border-r border-black">
            Losses post-harvest
          </th>
          <th className="border-r border-black py-[1.2%]">Images</th>
        </tr>
        <tbody>
          {data.Post_Harvest.map((d: any, index: any) => (
            <tr key={d._id}>
              <td className="border-r border-black font-thin">{d.losses}</td>
              <td className="border-r border-black font-thin">
                {d.images.length === 0 ? (
                  <p>No Image</p>
                ) : (
                  d.images.map((image: any, index: any) => (
                    <img
                      key={index}
                      src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(
                        image
                      )}`}
                      style={{
                        marginTop: "20px",
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      alt={`Image ${index}`}
                    />
                  ))
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginBottom: "20px",
          marginRight: "20px",
        }}
      >
        {data.Post_Harvest._id.map((stage: any, index: any) => {
          return (
            <figure>
              {data.Post_Harvest.images.map((image: any, index: any) => {
                return (
                  <img
                    style={{ width: 250, height: 250 }}
                    src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(
                      image
                    )}`}
                  />
                  // <img src={image}/>
                );
              })}
              <figcaption style={{ fontSize: 25 }}>{stage.name}</figcaption>
            </figure>
          );
        })}
      </div>
    </>
  );
};

export default Hervest;

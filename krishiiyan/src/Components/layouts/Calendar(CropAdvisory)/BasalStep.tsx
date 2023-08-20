import React from "react";
import { extractCodeFromDriveLink } from "../../../handleImageCode";

const BasalStep = (props: any) => {
  console.log(props.cropDetails)
  if(Object.keys(props.cropDetails).length === 0){
    return <>
      Loading...
    </>
  }
  return (
    <>
      <div
        className="text-[#13490A] font-extrabold mt-4 "
        style={{
          display: "flex",
          textAlign: "left",
        }}
      >
        <div>
              <br/>
              {
                props?.cropDetails?.date
              }
              <br/>
              <br/>
              <br/>
          <div style={{ display: "Flex", justifyContent: "space-between" }}>
            <p>
              Name Of the Stage:
              <br />
              {
                props?.cropDetails?.name
              }
            </p>
        {
                props?.cropDetails?.images.map((img:any , index : any)=>{
                  return (
                    <img src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(img)}`} style={{ marginTop: "20px" ,width:"200px", height:"200px", objectFit:"cover" }} />
                  )
                })
              }
        
          </div>

          {/* <p>
            Description:
            <br /> {props?.cropDetails?.cropStage[props.stage]?.Description}
          </p>
          <br /> */}
          {/* <p>NutrientContains: </p>
          <br /> */}
          <div
            className="text-[#13490A] font-extrabold mt-4 "
            style={{
              display: "flex",
              textAlign: "left",
            }}
          >
            <p>
              Disease Infection: <br />
              <ul>
              {
                props?.cropDetails?.disease.map((disease :any, i:number)=>{
                  return (
                    <li>{disease}</li>
                  )
                })
              }
              </ul>
            </p>
            {/* <img
              style={{ width: "200px", height: "200px", marginRight: "20px" }}
              src={
                props?.cropDetails?.cropStage[props.stage]?.Disease_Infection
                  ?.image
              }
            /> */}
          </div>

          <br />
          <div
            className="text-[#13490A] font-extrabold mt-4 "
            style={{
              display: "flex",
              textAlign: "left",
            }}
          ></div>
          <p>
            Pest Infestation: <br />
            {props?.cropDetails?.pest}
          </p>
          <br />
          <p>
            Fertilizer: <br />
            {props?.cropDetails?.Fertilizer.Dosage}
          </p>
           {
                props?.cropDetails?.Fertilizer.images.map((img:any , index : any)=>{
                  return (
                    <img src={`https://drive.google.com/uc?export=view&id=${extractCodeFromDriveLink(img)}`} style={{ marginTop: "20px" ,width:"200px", height:"200px", objectFit:"cover" }} />
                  )
                })
              }
        
          <br />
          <p>
              Weed: <br />
              <ul>
              {
                props?.cropDetails?.weed.map((disease :any, i:number)=>{
                  return (
                    <li>{disease}</li>
                  )
                })
              }
              </ul>
            </p>
            <br/>
            <p>
              Intercultutal operations: <br />
              {
                props?.cropDetails?.interculturalOperation
              }
            </p>
          {/*
          <p>
            Weed Mangement: <br />
            {props?.cropDetails?.weed.map((eachWeed : any, index:number) => {
              return (
                <div>{eachWeed}</div>
              )
            })
            }
          </p>
          <br />
          <p>
            DiseaseManagement:{" "}
            {props?.cropDetails?.cultivationStage?.basal?.diseaseManagement}
          </p>
          <p>
            InterculturalOperation:{" "}
            {
              props?.cropDetails?.interculturalOperation
            }
          </p> */}
          <br />
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "row",
        }}
      >
        <figure>
          <img
            src="/images/nirogen_deficiency.png"
            style={{ width: "250px", height: "190px", marginLeft: "40px" }}
          />
          <figcaption>Nitrogen Deficiency</figcaption>
        </figure>
        <figure>
          <img
            src="/images/phosporus_deficiency.png"
            style={{ width: "250px", height: "190px", marginLeft: "25px" }}
          />
          <figcaption>Phosphorus Deficiency</figcaption>
        </figure>

        <figure>
          <img
            src="/images/pottasium.png"
            style={{ width: "250px", height: "190px", marginLeft: "25px" }}
          />
          <figcaption>Potassium Deficiency</figcaption>
        </figure>

        <figure>
          <img
            src="/images/zinc.png"
            style={{ width: "250px", height: "190px", marginLeft: "25px" }}
          />
          <figcaption>Zinc Deficiency</figcaption>
        </figure>
      </div> */}
    </>
  );
};

export default BasalStep;

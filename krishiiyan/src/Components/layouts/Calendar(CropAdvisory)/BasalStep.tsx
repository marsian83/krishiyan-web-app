import React from "react";

const BasalStep = (props: any) => {
  return (
    <>
      <div
        className="text-[#13490A] font-extrabold mt-4"
        style={{ display: "flex", textAlign: "left" }}
      >
        <div>
          <p>
            Description:{" "}
            {props?.cropDetails?.cultivationStage?.basal?.description}
          </p>
          <br />
          <p>NutrientContains: </p>
          <br />
          <p>
          Nitrogen: {props?.cropDetails?.cultivationStage?.basal?.nutrientContains?.n}
          </p>
          <p>
          Phosphorus: {props?.cropDetails?.cultivationStage?.basal?.nutrientContains?.p}
          </p>
          <p>
          Potassium: {props?.cropDetails?.cultivationStage?.basal?.nutrientContains?.k}
          </p>
          <p>
            Zinc: {props?.cropDetails?.cultivationStage?.basal?.nutrientContains?.Zn}
          </p>
          <p>
            ImportantActivity: {props?.cropDetails?.cultivationStage?.basal?.importantActivity}
          </p>
          <p>
            DiseaseManagement:  {props?.cropDetails?.cultivationStage?.basal?.diseaseManagement}
          </p>
          <p>
            InterculturalOperation: {
              props?.cropDetails?.cultivationStage?.basal
                ?.interculturalOperation
            }
          </p>
          <p>
            SynpfomImage: {props?.cropDetails?.cultivationStage?.basal?.synpfomImage}
          </p>
          <br />
        </div>
      </div>
      <div
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

        
      </div>
    </>
  );
};

export default BasalStep;

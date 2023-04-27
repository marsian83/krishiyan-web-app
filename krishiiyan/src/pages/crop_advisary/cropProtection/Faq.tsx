import React, { useState } from "react";

const Faq = (props: any) => {
  const [data, setData] = useState(props.crop.faq.value);
  return (
    <div>
      <div className="text-start">
        <span className="font-extrabold text-start">1. {data.value1.data}</span>
        <br />
        {data.value1.answer}
      </div>

      <div className="text-start">
        <span className="font-extrabold text-start">2. {data.value2.data}</span>
        <br />
        {data.value2.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">3. {data.value3.data}</span>
        <br />
        {data.value3.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">4. {data.value4.data}</span>
        <br />
        {data.value4.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">5. {data.value5.data}</span>
        <br />
        {data.value5.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">6. {data.value6.data}</span>
        <br />
        {data.value6.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">7. {data.value7.data}</span>
        <br />
        {data.value7.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">8. {data.value8.data}</span>
        <br />
        {data.value8.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">9. {data.value9.data}</span>
        <br />
        {data.value9.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          10. {data.value10.data}
        </span>
        <br />
        {data.value10.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          11. {data.value11.data}
        </span>
        <br />
        {data.value11.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          12. {data.value12.data}
        </span>
        <br />
        {data.value12.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          13. {data.value13.data}
        </span>
        <br />
        {data.value13.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          14. {data.value14.data}
        </span>
        <br />
        {data.value14.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          15. {data.value15.data}
        </span>
        <br />
        {data.value15.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          16. {data.value16.data}
        </span>
        <br />
        {data.value16.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          17. {data.value17.data}
        </span>
        <br />
        {data.value17.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          18. {data.value18.data}
        </span>
        <br />
        {data.value18.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          19. {data.value19.data}
        </span>
        <br />
        {data.value19.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          20. {data.value20.data}
        </span>
        <br />
        {data.value20.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          21. {data.value21.data}
        </span>
        <br />
        {data.value21.answer}
      </div>
      <div className="text-start">
        <span className="font-extrabold text-start">
          22. {data.value22.data}
        </span>
        <br />
        {data.value22.answer}
      </div>
    </div>
  );
};

export default Faq;

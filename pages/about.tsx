import React, { useEffect, useMemo, useState } from "react";
const apiUrl = "/api/subscribe";
const About = () => {
  const form = new URLSearchParams();
  form.append("name", "test");
  form.append("email", "htktuan9898@gmail.com");
  form.append("Phone", "0339393939");
  form.append("CareerJob", "FE");
  form.append("boolean", true);
  form.append("list", "gxYCmQpoSAfogqMTDAFmkw");
  form.append("subform", "yes");
  form.append("Document", "FE");
  form.append("Location", "HCM");
  const [text, setText] = useState();
  useEffect(() => {
    fetch(apiUrl, {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setText(data);
      })
      .catch((reason) => console.log(reason));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{JSON.stringify(text)}</div>;
};

export default About;

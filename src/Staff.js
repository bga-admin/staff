import React from "react";

export default function Staff(){
fetch("https://script.googleusercontent.com/macros/echo?user_content_key=rFGe_Z-tIKk8Qn2h3IpOEFQpYFp34TSfDbTouYTFMWx489sicSQmx-u1U34GoN_yy5DADVUWy47OOAL5I0_0YWKKmNGIGejMm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDTZATvuSPtMi_EhefoUoYLI_aDIcZq27sUH4NX7DDueCCuH9Ogr7JuUHnlingAn02UL9w7rXqebBoIksNyC6tnRO92L71kPL9z9Jw9Md8uu&lib=M81s-3hnirGji1y4zjeMOyVo8lr0ql1Kg")
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
}
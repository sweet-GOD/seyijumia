export default function Delivery() {
  return (
    <div className="p-2  bg-white rounded-lg shadow-lg">
      {/* <div style={{ borderBottom: "1px solid #000" }} className="p-2 font-bold">
        DELIVERY & RETURNS
      </div>
      <p className="p-2">
        Free delivery on thousands of products in Lagos, Ibadan & Abuja Details
      </p> */}

            <div className="py-3 font-bold" style={{ borderBottom: "1px solid #eee" }} >
                <h6 style={{fontSize: "13px"}}>DELIVERY & RETURNS</h6>
            </div>
            <div className="py-3" style={{ borderBottom: "1px solid #eee" }} >
                <h6 style={{fontSize: "12px"}}>JUMIA <span className="text-warning"><i className="bi bi-send-fill"></i>EXPRESS</span></h6>
                <span style={{fontSize: "14px"}}>Free delivery on thousands of products in Lagos, Ibadan & Abuja</span>
            </div>
            <div className="mt-3">
                <h6 style={{fontSize: "14px"}}>Choose your location</h6>

                <select style={{fontSize: "12px"}} name="Location" id="" className="w-full p-2 mt-2 rounded-1">
                    <option value="">Lagos</option>
                </select>
                <select style={{fontSize: "12px"}} name="Location" id="" className="w-full p-2 mt-3 rounded-1">
                    <option value="">LEKKI-AJAH (SANGOTEDO)</option>
                </select>
            </div>
        
    </div>
  );
}

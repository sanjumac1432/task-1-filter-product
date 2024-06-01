function App() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          border: "1px solid black",
        }}
      >
        <div className="card" style={{ maxWidth: 345, m: 4 }}>
          <div className="img">
            <img
              src={product.image}
              alt="product"
              style={{ height: 345, width: 345 }}
            />
          </div>
          <div className="content">
            <h6>{product.title}</h6>
            <p style={{fontSize:16,fontWeight: "bold"}}>{product.category}</p>
          </div>
          <div className="btn">
            <p style={{fontWeight: " bold", fontSize:18}}>{product.price}</p>
            <button style={{background:"green", borderRadius:20, padding:10, fontSize: " bold"}}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

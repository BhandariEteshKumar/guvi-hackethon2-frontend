import { Button } from "@mui/material";
import { useState } from "react";
export default function ProductTable({ products, add, setProducts }) {
  const [name, setName] = useState(null);
  const [color, setColor] = useState(null);
  const [material, setMaterial] = useState(null);
  const [type, setType] = useState(null);
  const example = {};
  example.name = name;
  example.color = color;
  example.material = material;
  example.type = type;
  return (
    <div className="dis">
      <table>
        <thead>
          <tr>
            <th colSpan={5}>Products</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ProductName</th>
            <th>Color</th>
            <th>Material</th>
            <th>Type</th>
          </tr>
          {products.map((product, index1) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.color}</td>
              <td>{product.material}</td>
              <td>{product.type}</td>
              <td>
                {add ? (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      let data = products.filter((product, index) => {
                        return index1 !== index;
                      });
                      setProducts(data);
                    }}
                  >
                    Remove
                  </Button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {add ? (
        <form>
          <div className="row">
            <label htmlFor="title" className="col">
              UserName:{" "}
            </label>
            <input
              id="title"
              type="text"
              className="col"
              onInput={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="poster" className="col">
              Color:{" "}
            </label>
            <input
              type="text"
              id="poster"
              className="col"
              onInput={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="rating" className="col">
              Material:{" "}
            </label>
            <input
              type="text"
              id="rating"
              className="col"
              onInput={(e) => setMaterial(e.target.value)}
            />
          </div>
          <div className="row">
            <label className="col">Type: </label>
            <textarea
              className="col"
              onInput={(e) => setType(e.target.value)}
            ></textarea>
          </div>
          <Button
            variant="text"
            onClick={() => setProducts([...products, example])}
          >
            Add
          </Button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

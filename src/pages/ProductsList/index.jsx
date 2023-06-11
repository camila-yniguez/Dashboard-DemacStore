import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { getProducts } from "../../services/products.service";
import { Loading } from "../../components/Loading";
import { Alert, Typography } from "@mui/material";
import styles from "./index.module.css";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Nombre",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Descripción",
    width: 150,
    editable: true,
  }
  
];

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    type: "",
    isOpen: false,
  });

  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = getProducts();
    fetchProducts
      .then((productsResponse) => {
        setProducts(productsResponse.products);
      })
      .catch((error) => {
        console.error(error);

        setAlert({
          message: "Ocurrió un error al obtener la información",
          type: "danger",
          show: true,
        });
      })
      .finally(setIsLoading(false));
  }, []);

  if(isLoading) return <Loading />;
  const getRowClassName = (params) => {
    return params.rowIndex % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <section>
        { alert.isOpen && ( <Alert alert={alert} setAlert={setAlert}/> ) }
        <Typography paddingLeft={10} variant="h4">Listado de productos</Typography>

        <Box className={styles.tableContainer}>
          <DataGrid
            rows={products}
            columns={columns}
            getRowClassName={getRowClassName}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
    </section>
  );
};

"use client";
import { Box, Button } from "@mui/material";
import { Autocomplete, makeValidate, TextField } from "mui-rff";
import { useSafeState } from "ahooks";
import { Chain } from "viem";
import { mainnet } from "viem/chains";
import { chains, ChainKey } from "@/config/chains";
import { Form } from "react-final-form";
import * as yup from "yup";

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const chainList = Object.entries(chains).map(([key, chain]) => {
  return {
    label: key,
    chain,
  };
});

const Test = () => {
  const [chain, setChain] = useSafeState<Chain>(mainnet);

  const validationSchema = yup.object().shape({
    chain: yup.object().required("Chain is required"),
    privateKeys: yup.string().required("Private Keys is required"),
  });
  const validate = makeValidate(validationSchema)
  const onSubmit = () => {};
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "1200px" },
        }}
        className="flex justify-center"
      >
        <Form
          onSubmit={onSubmit}
          initialValues={{ chain: "", privateKeys: "" }}
          validate={validate}
          render={({ handleSubmit, values }) => (
            <div className="flex flex-col">
              <Autocomplete
                name="chain"
                label="Chain"
                className="flex w-full"
                required={true}
                disablePortal
                options={chainList}
              />
              <TextField
                name="privateKeys"
                label="Private Keys"
                placeholder="one per line"
                multiline
                required={true}
                className="flex w-full"
                rows={4}
              />
            </div>
          )}
        >
          <Button variant="contained">Hello world</Button>
        </Form>
      </Box>
    </>
  );
};

export default Test;

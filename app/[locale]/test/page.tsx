'use client'
import { Box, Button } from '@mui/material'
import { Autocomplete, makeValidate, TextField, Radios } from 'mui-rff'
import { useSafeState } from 'ahooks'
import { Chain } from 'viem'
import { mainnet } from 'viem/chains'
import { chains, ChainKey } from '@/config/chains'
import { Form } from 'react-final-form'
import * as yup from 'yup'

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const chainList = Object.entries(chains).map(([key, chain]) => {
  return {
    label: key,
    chain,
  }
})

const Test = () => {
  const [chain, setChain] = useSafeState<Chain>(mainnet)

  const validationSchema = yup.object().shape({
    chain: yup.object().required('Chain is required'),
    privateKeys: yup.string().required('Private Keys is required'),
  })
  const validate = makeValidate(validationSchema)
  const onSubmit = () => {
    console.log('submit')
  }
  return (
    <>
      <Box
        // component='form'
        // noValidate
        // autoComplete='off'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '1200px' },
        }}
        className='flex justify-center'
      >
        <Form
          onSubmit={onSubmit}
          initialValues={{ chain: '', privateKeys: '' }}
          validate={validate}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <div className='flex flex-col'>
                <Autocomplete
                  name='chain'
                  label='Chain'
                  className='flex w-full'
                  required={true}
                  disablePortal
                  options={chainList}
                />
                <TextField
                  name='privateKeys'
                  label='Private Keys'
                  placeholder='one per line'
                  multiline
                  required={true}
                  className='flex w-full'
                  rows={4}
                />
                <Radios
                  radioGroupProps={{ row: true }}
                  name='way'
                  required={true}
                  data={[
                    { label: 'Self address', value: '0' },
                    { label: 'Another address', value: '1' },
                  ]}
                />
                <TextField
                  name='inscription'
                  label='Inscription'
                  placeholder='Inscription data'
                  required={true}
                  className='flex w-full'
                />
                <TextField
                  name='rpc'
                  label='RPC'
                  placeholder='rpc'
                  className='flex w-full'
                />
                <TextField
                  name='interval'
                  label='Interval'
                  placeholder='default 0ms'
                  className='flex w-full'
                />
                <Button
                  type='submit'
                  variant='contained'
                >
                  Hello world
                </Button>
              </div>
            </form>
          )}
        ></Form>
      </Box>
    </>
  )
}

export default Test

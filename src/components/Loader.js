import React from 'react';
import { Stack } from '@mui/material';
import { Oval } from 'react-loader-spinner';

const Loader = () => (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
        <Oval color="grey" />
    </Stack>
);

export default Loader;
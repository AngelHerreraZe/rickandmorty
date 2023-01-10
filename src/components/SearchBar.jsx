import { Autocomplete, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';

const SearchBar = ({allLocations, location}) => {
    
    const [value, setValue] = useState(location.name);

    const defaultOptions = {
        options: allLocations.length > 0 ? allLocations.result.name : [],
        getOptionsLabel: (options) => options
    }

    return (
        <div>
            <Stack spacing={1} sx={{ width: 500 }}>
                <Autocomplete
                    {...defaultOptions}
                    multiple={false}
                    id="search-bar"
                    value={value}
                    onChange={(event, newValue) =>{
                        setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="Locations" variant='outlined'/>
                    )}
                />
            </Stack>
        </div>
    );
};

export default SearchBar;
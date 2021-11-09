import React, { useState } from 'react';
import {
  Grid,
  Button,
  Container,
  Card,
  CardContent,
  CardActions,
  TextField,
  MenuItem,
} from '@mui/material';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const provinces = [
  {
    label: 'Alberta',
    value: 'AB',
  },
  {
    label: 'British Columbia',
    value: 'BC',
  },
  {
    label: 'Manitoba',
    value: 'MB',
  },
  {
    label: 'New Brunswick',
    value: 'NB',
  },
  {
    label: 'Newfoundland and Labrador',
    value: 'NL',
  },
  {
    label: 'Northwest Territories',
    value: 'NT',
  },
  {
    label: 'Nova Scotia',
    value: 'NS',
  },
  {
    label: 'Nunavut',
    value: 'NU',
  },
  {
    label: 'Ontario',
    value: 'ON',
  },
  {
    label: 'Prince Edward Island',
    value: 'PE',
  },
  {
    label: 'Quebec',
    value: 'QC',
  },
  {
    label: 'Saskatchewan',
    value: 'SK',
  },
  {
    label: 'Yukon Territory',
    value: 'YT',
  },
];

export default function Landing() {
  const [province, setProvince] = useState('ON');

  const changeProvince = (event) => {
    setProvince(event.target.value);
  };

  return (
    <>
      <main>
        <Container maxWidth="lg">
          <h1>Child component from another repo.</h1>
          <p>
            Phasellus vel malesuada odio. Sed lacinia diam in dolor mollis, in
            consectetur risus placerat. Praesent at hendrerit lectus. Sed
            maximus mollis tristique. Curabitur tempus euismod nisi ac
            condimentum. Donec tortor nisi, convallis vel purus at, pulvinar
            cursus diam. Vivamus egestas, eros fermentum maximus sodales, urna
            libero ultrices nisi, non efficitur ex nisi bibendum mauris. Nunc
            sagittis felis sem, in convallis neque commodo at.
          </p>
        </Container>
        <Container maxWidth="lg">
          <Grid container spacing={2} style={{ paddingBottom: `1rem` }}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="purchase-price"
                fullWidth
                label="Purchase Price"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="down-payment"
                fullWidth
                label="Down Payment"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="province"
                fullWidth
                select
                label="Select"
                value={province}
                onChange={changeProvince}
                helperText=""
              >
                {provinces.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12}>
                <Card className="card">
                  <CardContent className="content">
                    <div className="details">
                      <div className="features">
                        <ul>
                          <li>key feature number 1</li>
                          <li>key feature number 2</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions className="action">
                    <Button size="large" color="primary" variant="contained">
                      Explore Quote
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Container maxWidth="lg">
          <div className="smFooter">
            <ul>
              <li>
                <a href="">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { 
  Container, 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Typography, 
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Chip
} from '@mui/material';

import {
  AccountCircle,
  AttachMoney,
  History,
  AddCircle,
  Home,
  Security,
  LocalOffer,
  Settings
} from '@mui/icons-material';

const Wallet = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    walletId: 'WAL-123456',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
  });

  const [wallet, setWallet] = useState({
    main: 1500,
    securityDeposit: 500,
    pendingRefunds: 200,
    currency: 'USD'
  });

  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-10-05T14:48:00', type: 'Rent Payment', amount: -800, status: 'Successful' },
    { id: 2, date: '2023-10-04T10:15:00', type: 'Security Deposit', amount: 500, status: 'Successful' }
  ]);

  const [offers, setOffers] = useState([
    { id: 1, title: 'First Rent Cashback', description: 'Get $100 cashback on first payment' },
    { id: 2, title: 'Referral Bonus', description: 'Earn $50 for each referral' }
  ]);

  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Rental Platform</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <Toolbar />
        <List>
          <ListItem button component="a" href="/dashboard">
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component="a" href="/wallet">
            <ListItemIcon><AccountCircle /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component="a" href="/transactions">
            <ListItemIcon><History /></ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItem>
          <ListItem button component="a" href="/add-money">
            <ListItemIcon><AddCircle /></ListItemIcon>
            <ListItemText primary="Add Money" />
          </ListItem>
          <ListItem button component="a" href="/pay-rent">
            <ListItemIcon><AttachMoney /></ListItemIcon>
            <ListItemText primary="Pay Rent" />
          </ListItem>
          <ListItem button component="a" href="/offers">
            <ListItemIcon><LocalOffer /></ListItemIcon>
            <ListItemText primary="Offers" />
          </ListItem>
          <ListItem button component="a" href="/security">
            <ListItemIcon><Security /></ListItemIcon>
            <ListItemText primary="Security" />
          </ListItem>
          <ListItem button component="a" href="/settings">
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <Container sx={{ mt: 10, ml: 30 }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard user={user} wallet={wallet} />} />
          <Route path="/wallet" element={<Wallet user={user} wallet={wallet} />} />
          <Route path="/transactions" element={<TransactionHistory transactions={transactions} />} />
          <Route path="/add-money" element={<AddMoney />} />
          <Route path="/pay-rent" element={<PayRent />} />
          <Route path="/offers" element={<Offers offers={offers} />} />
          <Route path="/security" element={<SecurityDeposit />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Container>
    </Router>
  );
};

const Dashboard = ({ user, wallet }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={4}>
      <Card>
        <CardContent>
          <Avatar src={user.avatar} sx={{ width: 80, height: 80, mx: 'auto' }} />
          <Typography variant="h5" align="center">{user.name}</Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {user.email}<br />
            {user.phone}<br />
            Wallet ID: {user.walletId}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} md={8}>
      <Card>
        <CardContent>
          <Typography variant="h6">Wallet Balance ({wallet.currency})</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="h5">${wallet.main}</Typography>
                <Typography>Main Wallet</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="h5">${wallet.securityDeposit}</Typography>
                <Typography>Security Deposit</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={1} sx={{ p: 2 }}>
                <Typography variant="h5">${wallet.pendingRefunds}</Typography>
                <Typography>Pending Refunds</Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

const TransactionHistory = ({ transactions }) => {
  const [filters, setFilters] = useState({
    dateRange: '',
    type: ''
  });

  const filteredTransactions = transactions.filter(t => 
    (filters.type ? t.type === filters.type : true)
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Transaction History</Typography>
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Date Range"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={filters.dateRange}
              onChange={e => setFilters({ ...filters, dateRange: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={filters.type}
                onChange={e => setFilters({ ...filters, type: e.target.value })}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Rent Payment">Rent Payment</MenuItem>
                <MenuItem value="Security Deposit">Security Deposit</MenuItem>
                <MenuItem value="Refund">Refund</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions.map(tx => (
                <TableRow key={tx.id}>
                  <TableCell>{new Date(tx.date).toLocaleString()}</TableCell>
                  <TableCell>{tx.type}</TableCell>
                  <TableCell>${tx.amount}</TableCell>
                  <TableCell>
                    <Chip 
                      label={tx.status} 
                      color={tx.status === 'Successful' ? 'success' : 
                            tx.status === 'Failed' ? 'error' : 'warning'}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

const AddMoney = () => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Add Money</Typography>
        <TextField
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={e => setAmount(e.target.value)}
          sx={{ my: 2 }}
        />
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel>Payment Method</InputLabel>
          <Select
            value={method}
            onChange={e => setMethod(e.target.value)}
          >
            <MenuItem value="bank">Linked Bank Account</MenuItem>
            <MenuItem value="card">Credit/Debit Card</MenuItem>
            <MenuItem value="upi">UPI/Net Banking</MenuItem>
            <MenuItem value="wallet">Other Digital Wallets</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" fullWidth>
          Confirm Payment
        </Button>
      </CardContent>
    </Card>
  );
};

const PayRent = () => {
  const [property, setProperty] = useState('');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Pay Rent</Typography>
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel>Rental Property</InputLabel>
          <Select
            value={property}
            onChange={e => setProperty(e.target.value)}
          >
            <MenuItem value="property1">123 Main St</MenuItem>
            <MenuItem value="property2">456 Oak Ave</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={e => setAmount(e.target.value)}
          sx={{ my: 2 }}
        />
        <FormControl fullWidth sx={{ my: 2 }}>
          <InputLabel>Payment Method</InputLabel>
          <Select
            value={method}
            onChange={e => setMethod(e.target.value)}
          >
            <MenuItem value="bank">Linked Bank Account</MenuItem>
            <MenuItem value="card">Credit/Debit Card</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Enter OTP"
          type="number"
          fullWidth
          value={otp}
          onChange={e => setOtp(e.target.value)}
          sx={{ my: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Confirm Payment
        </Button>
      </CardContent>
    </Card>
  );
};

const Offers = ({ offers }) => (
  <Grid container spacing={3}>
    {offers.map(offer => (
      <Grid item xs={12} sm={6} md={4} key={offer.id}>
        <Card>
          <CardContent>
            <Typography variant="h6">{offer.title}</Typography>
            <Typography>{offer.description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

const SecurityDeposit = () => {
  const [refundRequested, setRefundRequested] = useState(false);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Security Deposit</Typography>
        <Typography variant="body1">Amount: $500</Typography>
        <Typography variant="body2">Refund Policy: 30 days after lease ends</Typography>
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={() => setRefundRequested(true)}
          disabled={refundRequested}
          sx={{ mt: 2 }}
        >
          {refundRequested ? 'Refund Requested' : 'Request Refund'}
        </Button>
      </CardContent>
    </Card>
  );
};

const Settings = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Security & Settings</Typography>
        <FormControlLabel
          control={<Switch />}
          label="Two-Factor Authentication"
        />
        <TextField 
          label="Transaction Limit" 
          type="number" 
          fullWidth 
          sx={{ my: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Update Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default Wallet;
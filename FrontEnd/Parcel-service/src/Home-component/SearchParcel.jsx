import React, { useEffect, useState } from 'react';
import Navigation from '../Home-component/Navigation';
import './SearchParcel.css';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

function SearchParcel() {
  const [searchValue, setSearchValue] = useState('');
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const [placement, setPlacement] = useState('right');
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetchParcels();
  }, []);

  const fetchParcels = async () => {
    try {
      const response = await axios.get('/api/parcels'); // Replace '/api/parcels' with your actual API endpoint
      setParcels(response.data);
    } catch (error) {
      console.error('Error fetching parcels:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle your search logic here
    console.log('Searching for:', searchValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Default parcel data
  const defaultParcel = {
    parcelId: 'PL12345',
    id: 0,
  };

  return (
    <div>
      <Navigation />
      <form className="parcelSearch" onSubmit={handleSubmit} role="search">
        <label className="psLabel" htmlFor="search">
          Enter ParcelID
        </label>
        <input
          className="psInput"
          id="search"
          type="search"
          placeholder="Enter Parcel ID."
          autoFocus
          required
          value={searchValue}
          onChange={handleChange}
        />
        <button className="Searchps" type="submit">
          Go
        </button>
      </form>
      <div className="SearchTable">
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Parcel ID</Th>
                <Th>Parcel Details</Th>
                <Th isNumeric>Track Detail</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr key={defaultParcel.id}>
                <Td>{defaultParcel.parcelId}</Td>
                <Td>
               

                  <button
                    type="button"
                    className="ViewButton"
                    onClick={onDrawerOpen}
                  >
                    View Detail
                  </button>
                </Td>
                <Td isNumeric>
                  <button type="button" className="TrackButton" onClick={onModalOpen}>
                    Track
                  </button>
                </Td>
              </Tr>
              {parcels.map((parcel) => (
                <Tr key={parcel.id}>
                  <Td>{parcel.parcelId}</Td>
                  <Td>
                    <button
                      type="button"
                      className="ViewButton"
                      onClick={onDrawerOpen}
                    >
                      View Detail
                    </button>
                  </Td>
                  <Td isNumeric>
                    <button type="button" className="TrackButton">
                      Track
                    </button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <Drawer placement={placement} onClose={onDrawerClose} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
     
      <Modal onClose={onModalClose} isOpen={isModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tracking Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Placeholder content */}
            <p>Shipped </p>
            <p>Banglore Hub</p>
            <p>Delivery in 3 days</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default SearchParcel;

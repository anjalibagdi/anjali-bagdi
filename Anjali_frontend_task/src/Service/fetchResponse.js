import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASEURL = 'http://localhost:4000'



export const fetchResponse = async () => {
  try {
    const response = await axios.get(`${BASEURL}/api/reviews`);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
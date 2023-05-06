import axios from 'axios';
import React, { useEffect } from 'react';
import ApiEndpoints from '../data/ApiEndpoints';

type PostHistoryProps = {
  UserID: string;
  ItemType: string;
  ItemID: string;
};

const PostHistory: React.FC<PostHistoryProps> = ({ UserID, ItemType, ItemID }) => {
  useEffect(() => {
    const postHistory = async () => {
      try {
        await axios.post(ApiEndpoints.history, {
          UserID,
          ItemType,
          ItemID,
        });
        console.log('History posted successfully!');
      } catch (error) {
        console.error('Failed to post history:', error);
      }
    };
    postHistory();
  }, [UserID, ItemType, ItemID]);

  return null;
};

export default PostHistory;

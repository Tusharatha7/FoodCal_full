import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon, Avatar } from '@rneui/themed';
import FastImage from 'react-native-fast-image'; // Efficient image loading

const Community = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchMockPosts(); // Fetch mock data when the component mounts
  }, []);

  const fetchMockPosts = () => {
    // Mock data for demonstration
    const mockData = [
      {
        id: '1',
        username: 'user1',
        profilePicture: 'https://example.com/profile1.jpg',
        imageUrl: 'https://example.com/image1.jpg',
        caption: 'Beautiful sunset!',
        likes: 10,
        likedByUser: false,
        comments: [
          { commentId: '1', username: 'user2', commentText: 'Amazing photo!', likes: 5, likedByUser: false },
          { commentId: '2', username: 'user3', commentText: 'Love it!', likes: 2, likedByUser: true },
        ],
      },
      // Add more mock data as needed
    ];

    setPosts(mockData);
  };

  const handleLikePress = (postId) => {
    console.log('Like pressed for post:', postId);
    // Implement logic to handle like press (e.g., update local state)
  };

  const handleCommentPress = (postId) => {
    console.log('Comment pressed for post:', postId);
    // Implement logic to handle comment press (e.g., navigate to comments screen)
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <View style={styles.userInfo}>
              <Avatar rounded source={{ uri: item.profilePicture }} />
              <Text style={styles.username}>{item.username}</Text>
            </View>
            <FastImage source={{ uri: item.imageUrl }} style={styles.postImage} />
            <View style={styles.postActions}>
              <TouchableOpacity onPress={() => handleLikePress(item.id)}>
                <Icon name={item.likedByUser ? 'heart' : 'heart-outline'} type="material" color={item.likedByUser ? 'red' : 'black'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleCommentPress(item.id)}>
                <Icon name="comment-outline" type="material" />
              </TouchableOpacity>
            </View>
            <Text style={styles.caption}>{item.caption}</Text>
            {/* Render comments here if needed */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  caption: {
    marginBottom: 10,
  },
});

export default Community;

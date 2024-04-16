import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';

const PostItem = ({ post, onLikePress, onCommentPress }) => {
  const [liked, setLiked] = useState(post.likedByUser);

  const handleLikePress = () => {
    setLiked(!liked);
    onLikePress && onLikePress(post.id, liked); // Trigger like action (update mock data or API call)
  };

  return (
    <View style={styles.postItem}>
      <View style={styles.userInfo}>
        <Avatar rounded source={{ uri: post.profilePicture }} />
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
      <View style={styles.postActions}>
        <TouchableOpacity onPress={handleLikePress}>
          <Icon name={liked ? 'heart' : 'heart-outline'} type="material" color={liked ? 'red' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onCommentPress}>
          <Icon name="comment-outline" type="material" />
        </TouchableOpacity>
      </View>
      <Text style={styles.caption}>{post.caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles for PostItem components
});

export default PostItem;

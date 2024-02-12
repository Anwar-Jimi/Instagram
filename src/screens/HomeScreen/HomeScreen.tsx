import { useRef, useState } from "react";
import {FlatList} from "react-native";
import FeedPost from "../../components/FeedPost";
import posts from "../../assets/data/posts.json"
import { ViewabilityConfig } from "react-native";

import { ViewToken } from "react-native";

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null)
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  }
  const onViewableItemsChanged = useRef(({viewableItems}: {viewableItems: Array<ViewToken>}) => {
    if(viewableItems.length > 0){
        setActivePostId(viewableItems[0].item.id)
    }
  });
  return(
      <FlatList
          data={posts}
          renderItem={({item}) => <FeedPost post={item} />}
          showsVerticalScrollIndicator={false}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged.current}
      />
  );
}

export default HomeScreen;
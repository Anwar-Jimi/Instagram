import { useRoute, useNavigation } from "@react-navigation/native"
import user from "../../assets/data/user.json"
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import { UserProfileNavigationProp, UserProfileRouteProp, ProfileNavigationProp, MyProfileRouteProp } from "../../navigation/types";


const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<UserProfileNavigationProp | ProfileNavigationProp>();

  const userId = route.params?.userId;

  return (
    <FeedGridView
       data={user.posts}
       ListHeaderComponent={ProfileHeader}/>
  )
}

export default ProfileScreen;
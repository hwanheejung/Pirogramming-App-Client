import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import AssignmentScreen from './AssignmentScreen';
import AnnouncementScreen from './AnnouncementScreen';
import DepositScreen from './DepositScreen';
import AttendanceScreen from './AttendanceScreen';
import Settings from './Settings';
import OperationPolicyScreen from './OperationPolicyScreen';
import AnnouncementDetail from './AnnouncementDetail';
import AdminDepositDetail from './admin/AdminDepositDetail';
import AdminCreateNotice from './admin/AdminCreateNotice';
import GradeAssignScreen from './admin/GradeAssignScreen';
import AdminSessionScreen from './admin/AdminSessionScreen';
import AddUserScreen from './admin/AddUserScreen';
import AddUserSuccessScreen from './admin/AddUserSuccessScreen';
import { useRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function DrawerNavigationRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AssignmentScreen" component={AssignmentScreen} />
      <Stack.Screen name="AnnouncementScreen" component={AnnouncementScreen} />
      <Stack.Screen name="AnnouncementDetail" component={AnnouncementDetail} />
      <Stack.Screen name="DepositScreen" component={DepositScreen} />
      <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="OperationPolicyScreen" component={OperationPolicyScreen} />

      <Stack.Screen name="AdminDepositDetail" component={AdminDepositDetail} />
      <Stack.Screen name="GradeAssignScreen" component={GradeAssignScreen} />
      <Stack.Screen name="AdminCreateNotice" component={AdminCreateNotice} />
      <Stack.Screen name="AdminSessionScreen" component={AdminSessionScreen} />
      <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
      <Stack.Screen name="AddUserSuccess" component={AddUserSuccessScreen} />
    </Stack.Navigator>
  );
}

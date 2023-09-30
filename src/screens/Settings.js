import { ScrollView } from 'react-native'
import React from 'react'
import StyledContainer from '../components/StyledContainer'
import HeaderDetail from '../components/Header'
import UserSection from '../settings/UserSection'
import NotiSection from '../settings/NotiSection'
import ThemeSection from '../settings/ThemeSection'
import PolicySection from '../settings/PolicySection'
import LogoutSection from '../settings/LogoutSection'
import Gap from '../components/Gap'
import UnregisterSection from '../settings/UnregisterSection'

export default function Settings() {
  return (
    <StyledContainer>
      <HeaderDetail title="설정" />
      <ScrollView>
        <UserSection />
        <Gap />
        <NotiSection />
        <ThemeSection />
        <PolicySection />
        <LogoutSection />
        <UnregisterSection />
      </ScrollView>
    </StyledContainer>
  )
}
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import NextLink from 'next/link'
import { Box, Breadcrumbs, Text, Link } from '@reactswap/uikit'
import { useTranslation } from 'contexts/Localization'

const Crumbs = () => {
  const { t } = useTranslation()

  return (
    <Box mb="24px">
      <Breadcrumbs>
        <NextLink href="/">
          <Link>{t('Home')}</Link>
        </NextLink>
        <NextLink href="/prediction">
          <Link>{t('Prediction')}</Link>
        </NextLink>
        <Text>{t('Leaderboard')}</Text>
      </Breadcrumbs>
    </Box>
  )
}

export default Crumbs

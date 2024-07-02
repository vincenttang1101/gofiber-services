import { Banner } from '@/components/common/Banner'
import { Banners } from '@/constants/banners'

type SwitcherPageProps = {
  params: {
    slug: string
  }
}

export default function SwitcherPage({ params }: SwitcherPageProps) {
  const { slug } = params

  const renderBanner = () => {
    const banner = Banners[slug as keyof typeof Banners]

    if (banner) {
      return <Banner title={banner.title} descs={banner.descs} imageConfigs={banner.imageConfigs} />
    }
    return null
  }

  return <div>{renderBanner()}</div>
}

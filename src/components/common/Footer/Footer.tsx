import EmailForm from './components/EmailForm'
import FooterColumn from './components/FooterColumn'

const footerData = {
  contact: {
    title: 'Liên hệ',
    items: [
      { icon: { src: '/icons/phone.svg', alt: 'Phone' }, text: '0989 07 85 07' },
      { icon: { src: '/icons/envelope.svg', alt: 'Email' }, text: 'sales@gofiber.vn' },
      {
        icon: { src: '/icons/map-pin.svg', alt: 'Address' },
        text: 'Số 231, Đường Tây Thạnh, P. Tây Thạnh, Q. Tân Phú'
      },
      {
        icon: { src: '/icons/house.svg', alt: 'Business ID' },
        text: 'Mã số doanh nghiệp: 0317499104'
      }
    ]
  },
  information: {
    title: 'Thông tin',
    items: [
      { icon: null, text: 'Theo dõi đơn hàng' },
      { icon: null, text: 'Chính sách bảo hành' },
      { icon: null, text: 'Chính sách vận chuyển' },
      { icon: null, text: 'Điều khoản dịch vụ' },
      { icon: null, text: 'Chính sách bảo mật thông tin' },
      { icon: null, text: 'Chính sách đổi hàng & đổi trả hàng' }
    ]
  },
  userGuide: {
    title: 'Hướng dẫn sử dụng',
    items: [
      { icon: null, text: 'Hướng dẫn hosting' },
      { icon: null, text: 'Hướng dẫn máy chủ' },
      { icon: null, text: 'Hướng dẫn email' },
      { icon: null, text: 'Hướng dẫn tên miền' }
    ]
  },
  followUs: {
    title: 'Theo dõi chúng tôi',
    items: [
      { icon: { src: '/icons/instagram.svg', alt: 'Instagram' }, text: null },
      { icon: { src: '/icons/youtube.svg', alt: 'Youtube' }, text: null },
      { icon: { src: '/icons/facebook.svg', alt: 'Facebook' }, text: null },
      { icon: { src: '/icons/tiktok.svg', alt: 'TikTok' }, text: null },
      { icon: { src: '/icons/zalo.svg', alt: 'Zalo' }, text: null }
    ]
  }
}

export default function Footer() {
  return (
    <div className='bg-footer-gradient'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-[80px] py-[64px] sm:grid-cols-2 lg:grid-cols-4'>
          <div className='sm:col-span-1'>
            <FooterColumn data={footerData.contact} />
          </div>

          <div className='sm:col-span-1'>
            <FooterColumn data={footerData.information} />
          </div>

          <div className='sm:col-span-2'>
            <div className='grid grid-cols-1 gap-[80px] sm:grid-cols-2'>
              <div>
                <FooterColumn data={footerData.userGuide} />
              </div>
              <div>
                <FooterColumn data={footerData.followUs} classNameList='flex-row' />
              </div>
            </div>
            <EmailForm className='mt-[38px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

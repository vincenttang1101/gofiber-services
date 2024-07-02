import { Banner } from '@/components/common/Banner'

export default async function HomePage() {
  return (
    <div>
      <Banner
        title='DỊCH VỤ HOSTING, MÁY CHỦ VẬT LÝ, MÁY CHỦ ẢO VPS TỐC ĐỘ CAO'
        descs={[
          'Xuất phát điểm là đơn vị giàu kinh nghiệm hoạt động trong lĩnh vực thiết kế website và các dịch vụ SEO tổng thể cũng như chuyên sâu, GOFIBER tự hào đã hỗ trợ đắc lực và hiệu quả cho các đối tượng khách hàng là cá nhân, tổ chức và cả doanh nghiệp.'
        ]}
        imageConfigs={{
          src: '/images/vps.webp',
          alt: 'VPS',
          width: 917,
          height: 664,
          className: '3xl:w-[917px] h-[664px]'
        }}
      />
    </div>
  )
}

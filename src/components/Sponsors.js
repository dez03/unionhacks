import React from 'react'

const Sponsors = () => {
  return (
    <div
      className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8"
      id="sponsors"
    >
      <div className="divide-y-2 divide-gray-200">
        <h2 className="text-center lg:text-6xl font-bold tracking-tight text-[white] text-4xl pb-4">
          Sponsors
        </h2>

        <h3 className="text-4xl text-center flex items-center justify-around flex-wrap font-bold pb-4 tracking-tight text-[white] pt-4">
          {/* To Be Announced */}
          <a href="https://www.dairyqueen.com/en-us/locations/nj/union/2625-morris-ave/11368/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dairy_Queen_logo.svg/1200px-Dairy_Queen_logo.svg.png"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.johnnynapkins.com/">
            <img
              src="https://popmenucloud.com/cdn-cgi/image/width=300,height=300,format=auto,fit=scale-down/xtsfmgdi/0f7c5dc2-b3e8-40d9-a9f2-77e72b707a02.png"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.chick-fil-a.com/locations/nj/union-township">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Chick-fil-A_Logo.svg/2560px-Chick-fil-A_Logo.svg.png"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.lifeenhancementwellness.com/">
            <img
              src="https://www.lifeenhancementwellness.com/storage/app/media/_LOGO/logo.jpg"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.pepesbbq.com/">
            <img
              src="https://images.getbento.com/accounts/3e45c57b8fe5af66d274affea2de3952/media/images/78318peps_logo.png"
              className="h-40 text-center my-8"
            ></img>
          </a>
          <a href="https://cozycornerdeli.net/">
            <img
              src="https://cozycornerdeli.net/wp-content/uploads/logo.png"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://slingshotahead.com/">
            <img
              src="https://slingshotahead.com/static/media/logo.b48a5d634df9ae0a5456.png"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://booksy.com/en-us/447201_jc-s-barber-house_barber-shop_28875_union?do=open-widget&hl=en-US&gei=dvgBZJTPCaSnptQPiIyx0AQ&rwg_token=AI9VzbuZZ19TNIQTy-fpvl0lssgnmB_HTnz2VycCiOU1fzoWu2ECQ-Q1_Je0R0l8QOAN_Awfvo3dKjgUiavosIjTUBZhmLA28Q%3D%3D">
            <img
              src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/447201/cover/d5dfe7787ca44847bf82a4a06ea16a-jc-s-barber-house-934acbfb628b4af9b3556fc1bd4781-booksy.jpeg?size=640x427"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://delkatrucking.com/">
            <img
              src="https://images-platform.99static.com/1i8RVD0Bk5i9xIfIcG2n3U1vXSc=/500x500/top/smart/99designs-contests-attachments/27/27927/attachment_27927144"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.harborusa.com/">
            <img
              src="https://ite-prod-cdn-end.azureedge.net/sharedmedia/breakbulkamericas/media/assets/logo-harbor-freight-transport-corp-400px.jpg?ext=.jpg"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.quicktransportsolutions.com/truckingcompany/newjersey/gem-transport-and-logistics-llc-usdot-3108335.php">
            <img
              src="https://media.licdn.com/dms/image/C560BAQGg7TCgKbw5Kw/company-logo_200_200/0/1519866329132?e=2147483647&v=beta&t=LGozz-qu8a8SBs4v5pttiE44uvu-1YZ-pUKUYLd7gjo"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.stickeryou.com/">
            <img
              src="http://d3ccuprjuqkp1j.cloudfront.net/GeneralImages/sylogo_4x3.png"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="https://www.ila1235fcu.com/">
            <img
              src="https://ilaunion.org/wp-content/uploads/International_Longshoremens_Association_logo-346x231-1.jpg"
              className="h-40 text-center"
            ></img>
          </a>
          <a href="http://www.heresthestorybooks.com/">
            <img
              src="http://www.heresthestorybooks.com/publishImages/index~~element986.png"
              className="h-40 text-center mt-2"
            ></img>
          </a>
          <a href="https://stores.partycity.com/us/nj/kenilworth/party-store-pc403.html?extcmp=GMBlisting_NJ_PC403_organic">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Party_City.svg/2560px-Party_City.svg.png"
              className="h-40 text-center mt-2"
            ></img>
          </a>
        </h3>
      </div>

      <p className="text-center tracking-tight text-[white] divide-solid divide-x divide-gray-50">
        If you'd like to sponsor us, email us at{" "}
        <a
          className="text-[#0e9fe1] hover:text-[#26a8e4] "
          href="mailto: unionhacks.team@gmail.com"
        >
          unionhacks.team@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Sponsors;
import HeroBanner from "../components/common/HeroBanner";
import ProductGrid from "../components/common/ProductGrid";
import Loader from '../assets/loader.gif'
import { useQuery } from "@tanstack/react-query";
import { fetchLaptops, fetchLaptopAccessories, fetchPhoneAccessories, fetchPhone } from "../services/data";

function getRandomFour(arr) {
  if (!Array.isArray(arr)) return [];
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

export default function Home() {
  const { data: laptopsData, isLoading: laptopsLoading } = useQuery({
    queryKey: ["laptops"],
    queryFn: fetchLaptops,
    staleTime: 10 * 60 * 1000,
  });
  const { data: phoneData, isLoading: phoneLoading } = useQuery({
    queryKey: ["phone"],
    queryFn: fetchPhone,
    staleTime: 10 * 60 * 1000,
  });
  const { data: accessoriesData, isLoading: accessoriesLoading } = useQuery({
    queryKey: ["laptop-accessories"],
    queryFn: fetchLaptopAccessories,
    staleTime: 10 * 60 * 1000,
  });
  const { data: phoneAccessoryData, isLoading: phoneAccessoryLoading } = useQuery({
    queryKey: ["phone-accessories"],
    queryFn: fetchPhoneAccessories,
    staleTime: 10 * 60 * 1000,
  });
  // const { data: phonesData, isLoading: phonesLoading } = useQuery({
  //   queryKey: ["phones"],
  //   queryFn: fetchPhones,
  //   staleTime: 10 * 60 * 1000,
  // });


  return (
    <div>
      <HeroBanner />
      <div>
        <h2 className="text-2xl font-semibold mb-4 p-4">Laptops</h2>
        {laptopsLoading ? <img src={Loader} alt="loading spinner" className="block mx-auto w-10 h-10"/>:<ProductGrid products={getRandomFour(laptopsData?.data)} loading={laptopsLoading} />}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 p-4">Laptop Accessories</h2>
        {accessoriesLoading ? <img src={Loader} alt="loading spinner" className="block mx-auto w-10 h-10"/>:<ProductGrid products={getRandomFour(accessoriesData?.data)} loading={accessoriesLoading} />}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 p-4">Phones</h2>
        {phoneLoading ? <img src={Loader} alt="loading spinner" className="block mx-auto w-10 h-10"/>:<ProductGrid products={getRandomFour(phoneData?.data)} loading={phoneLoading} />}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 p-4">Phone Accessories</h2>
        {phoneAccessoryLoading ? <img src={Loader} alt="loading spinner" className="block mx-auto w-10 h-10"/>:<ProductGrid products={getRandomFour(phoneAccessoryData?.data)} loading={phoneAccessoryLoading} />}
      </div>
    </div>
  );
}

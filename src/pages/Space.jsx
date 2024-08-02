import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Homenav from "../Components/navbar/Homenav";
import L from 'leaflet';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Fix default icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Space = () => {
    return (
        <div>
            <Homenav />
            <div className="w-full p-[3%] flex items-center justify-center">
                <div>
                    <div>
                    <h3 className="w-[500px] h-auto text-[48px] text-[#222222] font-[500]">Space Address</h3>
                    <p className="w-full mt-4 text-[14px] font-[400] font-500 text-[#6B6B6B]">Your space’s address will not be displayed publicly on your Skoutar listing. Guests will only get your exact address after they book the space.</p>
                    </div>
                    <div className='mt-10'>
                    <div className="w-full md:w-[920px] mb-6 md:mb-0">
                            <p className="font-semibold text-[16px] text-[#222222]">Country/ Region *</p>
                            <input type="text" placeholder="e.g United States" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                    </div>
                    <div className="flex flex-col md:flex-row w-full mt-10">
                        <div className="w-full md:w-[450px] mb-6 md:mb-0">
                            <p className="font-semibold text-[16px] text-[#222222]">Street Address *</p>
                            <input type="text" placeholder="e.g 459 8th Ave" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                        </div>
                        <div className="w-full md:w-[450px] md:ml-5">
                            <p className="font-semibold text-[16px] text-[#222222]">Address 2</p>
                            <input type="text" placeholder="e.g 459 8th Ave" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full mt-10">
                        <div className="w-full md:w-[450px] mb-6 md:mb-0">
                            <p className="font-semibold text-[16px] text-[#222222]">City *</p>
                            <input type="text" placeholder="e.g Lagos" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                        </div>
                        <div className="w-full md:w-[450px] md:ml-5">
                            <p className="font-semibold text-[16px] text-[#222222]">State *</p>
                            <input type="text" placeholder="e.g Lagos" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                        </div>
                    </div>
                    <div className="w-full md:w-[920px] mt-5 mb-6 md:mb-0">
                            <p className="font-semibold text-[16px] text-[#222222]">Zip code *</p>
                            <input type="text" placeholder="e.g 122908" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                    </div>
                    <div className="w-full md:w-[920px] mt-5 mb-6 md:mb-0">
                            <p className="font-semibold text-[16px] text-[#222222]">Name for Insurance Certificate*</p>
                            <p className="font-normal mt-2 text-[14px] text-[#6B6B6B]">We suggest using a person or company responsible for ownership or lease.</p>
                            <input type="text" placeholder="e.g 122908" className="mt-2 w-full h-[48px] border rounded-[10px] p-2" />
                    </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className="bg-[#F8F7F7] w-[325px] h-[500px] flex flex-col items-center py-3 justify-normal">
                    <p className="w-[286px] h-auto font-[400] text-center text-[14px] text-[#6B6B6B] leading-6">
                    Skoutar protects your address by only displaying your approximate location. We will share your address when you accept a viewing or booking.
                    </p>
                    <div className="w-[278px] h-[209px] mt-5 border bg-white">
                        <MapContainer center={[6.5244, 3.3792]} zoom={13} style={{ height: "100%", width: "100%" }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[6.5244, 3.3792]}>
                                <Popup>
                                    Lagos, Nigeria
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Space;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button, Carousel, Col } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';


import { QUERY_KEYS, BASE_URL, type President } from '../../utils/index.ts';
import { PresidentDTO, PresidentApi } from '../../utils/dto/President.ts';
import { Profile } from './Profile/index.tsx';

export function MainPage() {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEYS.GET_PRESIDENTS],
        queryFn: async () => {
            const response = await (await fetch(`${BASE_URL}/standard/president`)).json();
            return response.map((president: PresidentApi) => new PresidentDTO(president).toCamelCase());
        }
    });

    function SampleNextArrow (props: any){
        const { onClick } = props;
        return (
            <Button 
                onClick={onClick}
                icon={<DoubleRightOutlined style={{color: 'blue'}} />} 
                size="middle"
                style={{ cursor: 'pointer', position: 'absolute', top: '50%', right: 0 }}
            />
        )
      }
      
      function SamplePrevArrow(props: any) {
        const { onClick, style } = props;
        return (
            <Button 
                onClick={onClick}
                icon={<DoubleLeftOutlined style={{color: 'blue'}} />} 
                size="middle"
                style={{ cursor: 'pointer', left: 0, top: '50%', position: 'relative' }}
            />
        )
      }

      const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      }

    return (
        <Carousel draggable arrows {...settings} >
            {data?.map((president: President) => <Profile president={president} />)}
        </Carousel>
    );
}
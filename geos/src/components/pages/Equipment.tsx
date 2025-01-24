import React from "react";
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import EquipmentCard from "../EquipmentCard.tsx";

const equipment = [
    {
        name: "Wingtra Drone",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMVFhUVFRUVFRUVFRUVFRUVFRcXFxcVFhgYHSggGBolGxUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK//AABEIALcBEwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAwECBAUG/8QAOxAAAQMDAgMFBwIFAwUBAAAAAQACEQMSITFBBFFhEyJxgZEFMlKhsdHwQsEUYqLh8QYj0kNygpKTU//EABoBAQEAAwEBAAAAAAAAAAAAAAABAgQFAwb/xAAuEQACAgEDAgMHBAMAAAAAAAAAAQIRAwQSIQUxQVFhExQycYGRoRUiweFS8PH/2gAMAwEAAhEDEQA/APAQptVw1TautRrC7VNqvCmEoouEQmQiFaIKhEJkIhKAuEQmQiEoC4RCZCISiC4RCvCIQFLVEJqiFKAuEQmQohKBSEQrwiEBSFEJkIhKAuEQrwiEopSEQrwiEoC4RCZCiEoFIRCvCIUoouEQmQohKAuFEJhCghSgdDgh3B5/UoVuCb3B5/UqV5tFsz2qbU21Fq9zzsVai1OtRaqLE2otTrVFqCxVqi1OtRahLE2otTrVFqCxVqLU21FqCxVqLU21FqCxVqi1OtRaoLE2otTbUWoLFQohNtRaqLFQiE21RagsVCITbVFqFsXCITLUWoLFQiE21RahbFwiEy1EKFsXCiEy1FqCxRCi1NtUFqlA28G3uDz+pQm8G3uDz+pQvNoyK2IsT7UFqyeSC7tGKhJ9kIsRYtIpSpNAp7WHmh7OfkzLaixaexP4QjsDy+ivtIea+5jsn5MzWKLVpNIqtiqnF9miOMl3QixFifYixZmFme1Fq0WKLFBYi1FifaixBYi1FifYi1BZnsUWLRYixC2Z7VFq0WKLEFiLVFq0WKLEFiLVFq0WKLEFiLUWp9iixCibVFqfYotQom1FqdYosQCbVFqfaotQom1Ran2qLVAa+Db3B5/UqE3hG9wef1KlYMyLNb1Vg0c1JofghS2mVxTqkWN5/NXaAN/mpA5hFqWQO70QGNS30OYPkUptONylg0PoeCp2PNXtMYQ1x8+X2VsFDR5KtvSE+m/oEzGhELOGWUezMJwjLujJYjs1tNDkqmiuji1MZ8PhnOy6eUeVyjHYixajSKjs1sWa9MzWIsTarg3YnwBKyVePj/pVT4N/uvKWfGvE9Y4Mj8Btiixcur/qAgwOFr+bSD5CDK1cH7VFRz2hj5Zb3bYdBAm4HQgyFVmg+zMXjmu6NViixOpkn9Lh4x+xU1YaCToBJWe5JWYpNukIFInAEqX0SNQR4iF3PYVVpYXAZmDppC31XB2CJHUBcDJ16MclKHHz5+x34dDk4W5c/Lg8jYixdTj+DDTLdDtyKyWLt4M8M+NZIdmcbPhnhm4T7oy2otWmxRYvY8TNaixaOzRYhTNYixaLEdmhTNYixaOzUWIUz2KLFpLFFihbH8K3ujz+pQncK3ujz+pQsGZFg1TanWdB81Zo6BcLcdahAYg01pjopB6JuFGQhRaOS2+QU45BNwoxAKOzHL9lvt6Ijom4UY2UxyUtELZb0QW9E3EoyeAVg/mE8D+VXFMHY+qu4UZyUs6xOy1PpNGTMSJ9YXVZxXCik4CjbVxa4S4Ribrj0OgXlk1McfD8j2xaaeTledHB7I7CfmqnhHH9JHkV0zxJUduVzn1SXhH8nRXS14y/BzTwTxoD4QV5z2H/AKaq0qgqkaF0zcCQ4EyGkTy1he17ZVNc/hUXVcq7JD9Lxv4nZh7E7g+hWH2wIpO54Hq4LvNrnmpFbIPLI6FbP69kcXGUPz/R4LocFNSjLs77HH/0+4gFp6fQ/ZdWo0m0zEGdNRBEfNYgf9955kHzMT9SurwjLjABJicfU8guTL90rXideX7VyY+LbLSuc+gdnEeTfsuvxDC10ERBEg/migtZ8P1XX6b1PHpcbx5E+98fT1RyOodNyaqayY2u1c/8Z4j29xr6Dqbb3OyXzYNACLcEXa6eBnC2cNwHE+8eJkHMdk3fzwvQV/ZdB7g97ASABkA7zynymEylwTGtDWmA0ADfAXQx9Y00pvc2l4d/4Ofk6RqIwW1Jvx7fycplCoNXg/8AhH0cm9muieF5EJbqBGoXUw6rBl4xzT+vP27nNy6XNi5nFr6cGLs1HZrZ2ajs1sHgY7EWLX2ajs0KZLFFi1mmoNNCl+GZ3R5/VQtPD0+6PP6oWDMi4pD4vorBg+L6JI41vI/L7q/8ezef6fuuHsOruQ0NHP6fdSWjn+eqUOPp9f6furjjqfM+g+6u0bkXDG8z+easAPwBVqcWxrQ8mGkwHECCRtM6qP4xnxfJTaNyLgD8ARZ+fgVRxbfi/pP2Vv4tvP5H7JtG5B2Y/CPsrdk3r+eSqOKb1/q+ysK7OZ9XfZNo3IgtbyP55KwYOR9f7KRXp9f/AGd9kxvEs/CfspQ3Iy8dHZuxy+oWDtF0/aHFMNNwESRz6hcMOXL16/cvkdnpnwS+ZqvU3pAcpuXOo6Y65FyTcpuSgOuQHJNyA5KAoP8A953l+y9H7C43s3R3cuZcCAS6mJuDZ3yDGpheUFT/AH3eH7Bd13tFoAHY0yQAJIEmI1xqYPqtrC1CSldcGtqI747asf7cey+2mIDWxnU94mSP06nGwhc4vWnieNY4ODaTW6WmACI1wBv47rnlyw1G2U20ZadNQSY4vUB8JVyguXjSPc0dqrCustyi5VKiPk6dGlcJUu4aEezX9zzK3BwX0+n1WX2cbfgfK6nTYlllS8TnGgo7Are4jmqmOYXutXkPD3XGYDRVCxbyQlujoslrJeSMXpI+DK0QABkb/VQtNCm20ab/AFQr72/Inuq8xtDiu6C4AyTgmMbEwfpKaaomYb0zP1yszez5u9Spmn/MtSzZGtrA7Njy0THFpGjddMGCsxdTjAJO04+am6nqZndLJQ54pnJawxzAMeCq2pT5NnfT5c1VjqXJT/tcvmliiwcz4G+gUF7AcU2+jVIFPqgNpnT7pbFIW51NxgsA00tkeBGi0Oaxw70OtGCYJjpz+aVa3Y/0n7pgs/AlkoUzgqY96HSMd1ggf+LRnx9Ff+GpfAPSFa9nw/n3Vg9nwn1CWxRRvB05ENB77OelwmZ1wvMcRh7hBw46RGvivXcPUbe3un3hqRzXA9qcLD3Ee6ST4GdCtDXxbipeR0um5FGbg+LOZefhd6t+6O0PwO/o/wCSYQoXKs7VepTtT8DvVn/JR2x+B3qz/kmKEv0FepTtj8DvVn/JArH4Hf0/s5XUhL9BXqcplcOryNHAEebQuy9y8+BbXA5GPTC73DUKlRwp07S9xhocbWk7Au2HWF7ThbikeW6ouTJBwq5+F/8A83/ZTw5N4B+KCIggg5BHPC65WtOW1nojjZ+F/wD86n2UZ+F//o/7LsqpWHtfQy5OPJ5O82uH1CguXZUtCzWT0I+xfhuDIpth8SGu2/W0OjTqm9g/AvG5nG4GPl81oqNAI191nyY37IEdV9LjW2KXofLZHum5epidTeP1jfZuVSypzZHWJ8lukfzKQ4dfRZmNHONKr/L8ksmpMQ0eIIHkdCuq5wVHPG/kgoTRZUgd1n4ULbSdj3VKpKM7eF2nygqw4br8tPyEymJ8t5IHn+bIb+/xb6rGjKyOwnf5FXHDfkSoF2ndmM5MdY9dFZjZMG27E4MfPwKEsgcK3/MKBwjeR8dPT82TO0aOXP3T+FWFMHP0VoliP4Vue7Ma5hXbwreXzTLh/nVVe4e7jMRzJg7eG6lCwHCDMA4iYJxOk8lH8MNPnKLP5T4CD+6bPiPFvNAKNEct9yY8x5qzaA0I+qax3hjqJ64jCCBrGh2j8CULChRhzf8Aubv1VX0GkkTOvJX4aowlpBnvD3YO+uNlV9sj+bnAkxMDniT4BWuCXycri/Yw1Y4A8jp/Zcuvwb2EhzT46jnqvUgidR1l0Efn7qXQIuLR1kDHitLLocc+Vwb+HqGWHD5X++J461RavUVWUD7xZyGW66RM6z+yzfwvCu0qMG0doJ2g69VqS6fkXZo3Y9Uxv4k0cGxFq2VeN9nNJa7iWsIMEF0EeRb89Fx/avtzhmwKFTtNy4+74CACT10WPuGd+CM/1LB6/Y53HCK58Wn1XU4CqbiQdGk/t+687xvtEPeHktGADEgYkjXxXQ9le06XemowF1rWy4CcyR8gtqGmnGcdy7HnPV45Y5bX3PY8PWZXcHPhtUCA/Rr9of1jAd69L1KZBIIgjUFcZhxIE9V1uB9pYDKoxo18SW9Dzb9PkctVoFme5Oma2DWvEqatBCkUydAfRRV9s02PLLK2P1NoVHtO8te1sEajH7LRT9rMP/7DGpo1QDPKWZOnhPVa0ek/5S/H9nq+qeUfyUZwjjyHiVpo8Nb+5Sx7XokYcTpHcqZOmtq09oCA6DB5gjHgYIW7h0WLE7S582aebWZcqpvjyQVRkH+UfIf2S3nMQcAGcRmfP5bpj6jTHOBpOxO6oCORjx08Z/ZbRqogif8AH2UCiTm4+ggqwjAz6k+pQKQ6zHn+Y+SFFupfk6qtXhxiRMaaHZN7MbTO/wCSqsaDofXCCy9AENAhCdSZj3iPRCCxAmJ722e7A8z9FVxdOgiJkmXE/wDbHLrugEN5Rga7xHTaM9VNWqLXZAO2bvEgGBHUoCXvAjJnyHkfsrMpzMAfIiBqcfmEmic5cXwMmBAOJ93AMkbphc0OjEzpJyOZGCJ05ICjAczUGDnvNAboYOMY58/ApzXbHB0mWw7rPJI4h36i0NExAlsbmfIf5VHMGHDQ6kh2vSR0+Wqlgc14DoF06gXujON8eSceJbkgAZ6T5pTaNMCZGh2BIOc4IIUsY3EASQJGNToJPgfQIC7qkCGwTvEEmIOo68lWjG1o0EZE9STKc1jjpbqBzdrGzo+iqWPJ2xjORiZcAZE/mEIUawuJJOc76wNBsB/dWoUn53AEw0EnEYJCvQcLsOJmAZwwEZ02wmMHewc6XaSCIxnRUFdTgE26gjJPpLR/dS5p15noQI8NRp0TQy0gHXPlB5npGNJCt/DTI1Ek5I9J2Gg80IZaT6bswSJIJcDkxn3tsacoV61FknuNJIHvNaTsNd9AMclZzA0EyCI1AMiDGIGnmrlgkwems425+RhAcut7C4cvLjw1C4mbjSpEydRpJKtW9lU3GX06bjP6qVN+RI3B/PRdSqCNCJiRMSBO8R5JPZi6QSSWxibeckSM+SA5Vf2Dw0AfwnDgDX/baQJOIAAgalVpf6a4QGP4WgZMhwpADQYAAM7/ALLuNGJIyDG0eO3zQ27JLhET8vl95QHIq/6f4T9PC8PIiJpNacTzbjKlnsyg2C2hQacmQxgcOstAgLpPpEmTDYEggmYgETju6df2SBVOkwSZB1EYkAzsryDLV4S/ZjTA072QclwEHloefNB9mMxAEzJuJIjmWnaTETtqt1ExIJMETJJLZOd/Hn4I7HSIAiCRJB1ka4P3ULYocM1oOIYTNpkjxEzHr+0S+q1pwHREkgAiNt1amchpwTphpnu/31VXzAJvjTYuAMSI+X+EAt9bvHD42gYjX8lAq3DuTOoLhc0jkM9DvhQwNOILTEw8RGu8Hw81FUUwJmCQTgDlnGLtIQpWrVNvdkmQJJLRBwTLZJ3UOpPAw9roGmhEkQQOWyxe06HaA2OscSwh0XABru8IJ1InwICdwjqhDbnEubgimCR5hwyNDhARW/iAPdBOoLja2N8jAGfRJfU4jUB2GkkWk5Gok6Tgg9PToGq0GLsOj4SO9zadM7eaXT4uY/TaYiMjUcuW/NAZHcRU0dJa4DAkESSBMGQOo+0aQ9wmACN5kbxyzqfVWqcM0tdUbMCGmQQAcgGNd9Uo0LA1zmkhxJwbPAtuPhMaIDZQy0GGfM/RqFm4LiG2CKnP/rVBudoMKVSBSe0alpg5LZdjpA66KBc6Q1jtiJGHTs0H91ZtCo4E6AECBI67bLM52GzOeYPP9oCwMja+m8DBIE6A4n74+SQ8ObLidictnEzAmSTronscbbncxOsuMCAQdpVDxYdpg6YiB0M42VIFCmHWuEC0Q0glpJIz9dfFWtA1l0SZM2nXTHjuqis2RLRzPKR9c7KxqFwgyGjYTHmEBV7YjG+dyOnippyBuBOMn0z5IpFjj7wE5LtYjUcilshx07sHvHuzBxqJI8EA2sO0MTDRkASIAjUg/wCTyQGEuIgxHvZIJ3DI0wCZ8Ndoqime9hpgaGIzkicxodVeoSRO2ACIPMaoBtF0924RGXTAHQzuOau2g0QRMzElskhs4knIGf8A2KU6AWhsw7GJcbmjN2Dr6JppQbO972TfAMZEeesqkBrGyWFxmSTIcddmkzHgrMfIBOST3i5oBmNLQImNwl1n9+1rcuF0x3QP5uZ+eUdrgXMkYgBpALgT3p9dNEBpvcZgAAGCS0DB3A016pJDSdiMxBtMbnpkFYTWO56+is7iXHSMiDbEkD4gpuRaOi5jY1A27wg6dW5S7WXjDXFveECZGYO5nQZH9slOq0AFrXXblziRjaAIjG6zvecEYzHLy66puRKOoWBonvSJwMjqSBqNFJqNIhj2kQB7uBORqOkrmiu5pJbcWFtrmwC4jOZO3Tkp4auWiG0mkAagYZnkOf7JYo11KroyYIOpEazzxur8PWecF0CAIAnGwO0LG2tdLi0BpjRzgCdPd0OyuKjY6nEADQnridUsUOoTnusjcYuA6jljmq1KrQDpgDGWt6TiNkxrcd0zqJAz5z6YVXPfIxrAMgkmOu2fqrYKFzSA8uumCA15NoPWe6RjbmipxLA0kwCMzA05zOyuHNaJdmQIPvSJ5HP+FanQaQMd4Rb3MRuZ+8oDOOIbv3tLZBJhw13gffVUrcS2QwsjDnB5wDGC0Obku3jktFXtMtidS06kCMgx91HBUc25jEvEACNjzySqDM6k28M75ltwe0NhhnJnHTCsx7S4ObJdr3j3p5gECD+FFWsQXNFwaDMlsyI5wQDI1BWPguPPaFrQx7SHEmoDII1jlnZQpofQuHdIaA64tOCTqdTIGZxAOiz/AMM8e7kQSG2h+nMA536q1biA1oIh7nHvta7YiXBpKZUfTJuaS2WkscRMiMCYwTO/ojCM9B4a8OLsQBIa4gOnRzSSQBMdIWmpVYAJcYJLR+prs3A7logdBlK4i9rQIAz376hBgiQBjBjngrLxbqZNjS4DIDvhdEyQDgQoU6XDEWiQ7fQYyShO4Hhnim0F0kDVrwGnwyhUwOSXVXAMLhbHutaQTA3dJx6JtKsGjScRBnBKUKR/NU5lLrjofusDMtSptIABg8to8ThXNMDqehmOeiq/u5OnPqgGIPPXXRCj3P7oA0HWdeXLKgNpkGQ4zmJbAjQaTjmlPqgkkDB9G+qcK3cNpHaYyLfd6A6oQz06IaLQ0NbryA6zyW2sXW90tcIBEQNDoRG8a9d1kOTPOBpj+ye6tENuZPwnMjwBE+KqDCjXcxxLrXjYPa1ok6EWjOsKzWgstdkzt3c65nXASZccwM8pjyklDa/dI25RPmlko1NAAk4bv3iOgInRWc7QDlAddMZ90dN56LGKl0iczg7enNaOGqBsk3ECQDEd6cH5KpkaHmA20PyQZNtoBJJIOmVD3gwMxDodPXSMf2WY2ES8k4xjFxmZ+SY14AAOHSJBi2I94JYGVaYJOh0giRjnnKTQZMYkA6DGhAU03EAEtABMA9dcp4pAnXBAk7ZxgKUUz1mznXPeDsHPhiICWxgJEic7kLd/DRNxBA5CHeMgwoawW7S7AwZ8ZH2ShZz2BhILge4TECSN/wBhK01O++6ZwZOQCBnOR6lWdSyXSXQTcAddQR5KjqMhuCCSDjDvB0qgHFoAYfEExMEbzr4q1PhjH6fEATPIGZIU8XQIc3uC4ONp3Ejcq3Dh4bJEOERk4z+k6boDN3pAJAtm3ME9InJQK9WWzkjEE4OZ9VrpcOAXYktBJDnYzrbjUclYUqc3wY627iCJ23VJYurxdsB4cTEw0XgHcACZj6LPw3HiTk5aXNEct4GkptKmwQWgZMjm0aZA2+6pVMOIIAIAgxHWAc/bKAl1Wcj3jBzgCMnPPPNJ4biCSTJBJN5IgAc5GoBVKbu84AyS33B9eWyXwvDUjc0NtdlzrnQXbmAZ9EKaKnEhotyRMQ0iHD4m7Rg46qgNHF2gJLcx6xkxlMZUgS5roGR3Q7ukAQBrvormi7FxDY9wuYIgYPrqoDG+tDi4xBHddk4HIHeSk0KgvIDSGlo6jMyY1Gg0K01aUibpAkd6CM/pxos1HhiMM5YIwG9M6+CAtV7xkAhuBdAMxgjKGmmC9zSRIMNJJDXzqY0CXWbVDQYkmDaGyMGCQcQ4hLNNwB7rs6tAmP5pUBppcVVAwaZ1yARvyJQmcHTbYO+3fUkHU7bISiWZr1d9S1l20/mEIUKDGl/KD+BOqUYNs9AcoQiKUDS18xLYg8pPQq1Ph6BbNv6rgBMXj9WdumiELJdgWDhuPBXY4ERuMDCELFMtE1KAI7wBjHKPupt0xJIETAgeSlCya4MRLqTgSLnCNADgeSbUqg2yANnQPQoQgFVIutaZGwyAesHQplNwggtGsF246BCEYLsMGDkA88nrlTWqXOgd5seDhzEqEKIozi7mQdJA0JPrKqyq6CbROkg49DzQhUhUB1QghxBZIABgST+rmmvqFsuwDEE6yTyQhVEEMque4G6Bbaca+MZnqtTaLi2BiwZkySOhOxCEIGTaPeaNDbByTOmSlFpc7GJEmTPRShEGDQwRPeybiZGBsAEt9TBGSBgTGBrhCFCmEVDkTqfl5KHMYxxMExEE5M75OUIU8AMZXdMHHOCcb4lRWqXQXAyDrJ0GhOcoQiZR9AOk2uIDiDBi2fml8XQe9pcyoWOkETluOY3yhCyIzlv9ocSxzZaxzSbQ+4iDO7YlPbxlV03HLSdIA8uiELEtjaXCXgOIElCEKmB//9k=",
        summary: "description of the drone and what it can/has been used for"
    },
    {
        name: "Eco-Counter",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVmtg6KRoBBiRdqq_t_UmQrehTShPasW5yA&s",
        summary: "description of the Eco-counter is and what it can/has been used for"
    },
]

export default function Equipment() {

    return (
        <Box maxWidth="xl">
            
            <Container maxWidth='xl'>
                <Grid container direction="row" justifyContent="center">

                    <Grid size={12}>
                        <Box pt={10} pb={2}>
                            <Typography variant='h3' m={5} className="header">
                            Equipment
                            </Typography>
                        </Box>
                        <Typography variant='h6' m={5} mb={10}>
                        We've got a whole host of equipment for all your geospatial needs including drones and counters!
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <Grid container justifyContent="space-evenly" m={5} spacing={3}>
                            
                            {equipment.map((item) => (
                                <Grid size={{xs: 10, md:5, lg: 4}} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <EquipmentCard details={item} />
                                </Grid>
                            ))}

                        </Grid>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
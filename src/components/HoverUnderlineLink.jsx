const HoverUnderlineLink = ({href, children}) =>{
    return(
        <>
        <a href={href} className="relative inline-block text-[12px] 
        uppercase after:absolute after:bottom-0 after:left-0 after:h-[0.5px] 
        after:w-full after:bg-current after:origin-left after:scale-x-100 
        after:transition-transform after:duration-700 hover:after:scale-x-0"
        >{children}</a>
        </>
    )
}

export default HoverUnderlineLink
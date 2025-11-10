const ReverseLinkList= (head)=>{
   let prev=null
   let curr=head
    while(curr){
        const nextTemp=curr.next // 1) guarda el siguiente
        curr.next=prev  //2) invierte el enlace
        prev.next=nextTemp //3) avanza el prev

    }
    return prev //devuelve el nuevo head
}
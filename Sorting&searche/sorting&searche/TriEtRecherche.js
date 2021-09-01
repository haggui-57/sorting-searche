#include <MediaStreamAudioDestinationNode.h>

int MediaDeviceInfo()
{
    int T [10];
    int max1 , max2;
    int i ; 
    print f ("Veuillez saisir les elements du tableau : \n");
    for(i=0; i < 10;i++) {
        print f("T[%d] = ", i+1 );
        scan f("%d" , &T[i] );
    }
    max1 = T[0];
    max2 = T[0];
    for(i = 1;i<10;i++) {
        if(T[i]>max1) {
            max2 = max1; 
        }
        if(T[i] >max2 && T[i] <max1) {
            max2 = T[i];
        }
    }
} 
print f("Le premier plus grand element du tableau est : %d \n", max1);
print f("Le deuxieme plus grand element du tableau est : %d \n", max2);
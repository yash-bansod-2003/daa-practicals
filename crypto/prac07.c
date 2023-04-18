#include <stdio.h>
#include <string.h>

void display(char *arr)
{
    for (int i = 0; i < strlen(arr); i++)
    {
        printf("%d ", arr[i]);
    }
}

void main()
{
    char pt[50], ct[50];
    printf("Enter plain text\n");
    scanf("%s", pt);

    printf("\nAND OPERATION:");
    for (int i = 0; i < strlen(pt); i++)
    {
        ct[i] = pt[i] & 127;
    }
    display(ct);

    printf("\nXOR OPERATION:");
    for (int i = 0; i < strlen(pt); i++)
    {
        ct[i] = pt[i] ^ 127;
    }

    display(ct);
}

from django.db import models
from django.db import connection


class CompanyManager(models.Manager):
    def get_nearby_spots(self, lat, lng, radius, limit):
        
        """
        use raw MySQL and Haversine Formula to search 
        companies nearby location
        http://en.wikipedia.org/wiki/Haversine_formula
        """

        radius = float(radius) / 1000.0
        cursor = connection.cursor()
        cursor.execute(
            """
                SELECT id, (6367*acos(cos(radians(%s))
                *cos(radians(latitude))*cos(radians(longitude)-radians(%s))
                +sin(radians(%s))*sin(radians(latitude))))
                AS distance FROM company_company HAVING
                distance < %s ORDER BY distance LIMIT 0, %s
            """,
            (float(lat), float(lng), float(lat), radius, limit)
        )
        
        result_list = []
        
        for row in cursor.fetchall():            
            p = {
                'id': row[0],
                'distance': row[1]
            }
            result_list.append(p)
        
        return result_list